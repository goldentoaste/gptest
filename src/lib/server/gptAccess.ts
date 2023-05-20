
import { Configuration, OpenAIApi } from "openai";

import { GPTKEY } from "$env/static/private";



const gptconfig = new Configuration(
    {
        apiKey: GPTKEY
    }
)

export const openai = new OpenAIApi(gptconfig)


