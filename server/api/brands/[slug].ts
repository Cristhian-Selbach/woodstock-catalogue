import mongoose from "mongoose";
import Guitars from "../../database/models/Guitars";

export default defineEventHandler(async (event) => {
  try {
    mongoose.connect(
      process.env.STRING_CONNECTION || "mongodb://localhost:27017"
    );
    const slugParam = event.context.params?.slug as string;

    function capitalizeWords(text: string): string {
      const wordsArray = text.split(" ");

      const wordsArrayCaptalized = wordsArray.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      );

      const final = wordsArrayCaptalized.join(" ");

      return final;
    }

    const slugReplaced = slugParam.replace("-", " ");
    const slugCapitalized = capitalizeWords(slugReplaced);

    const result = await Guitars.find({
      brand: { $regex: slugCapitalized, $options: "i" },
    });

    if (!result || result.length === 0) {
      setResponseStatus(event, 400);
      throw createError({
        statusMessage: `${slugCapitalized} could not be find`,
      });
    }

    return result;
  } catch (error) {
    setResponseStatus(event, 404);
    console.log("Error " + error);
    return "err";
  }
});
