"use server";

import { BASE_URL } from "@/constants/apiUrl";
import { z } from "zod";

const schema = z.object({
    searchQuery: z.string({
        invalid_type_error: "You must enter a valid movie name"
    })
})

export async function searchMovie(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        searchQuery: formData.get("searchQuery")
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors

        }
    }

    const { searchQuery } = validatedFields.data;

    try {
        const response = await fetch(`${BASE_URL}/search/movie?query=${searchQuery}&api_key=${process.env.API_KEY}`)
        const data = await response.json();
        //console.log(data);
        return data.results;
    } catch (error: any) {
        console.error(error.message);
        return { error: "Failed to find your movie" }
    }
}
