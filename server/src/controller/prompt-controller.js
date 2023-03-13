//Será o controlador de quem pode acessar e das requests e responses
const InputPrompt = require("../model/input-model")
const openai = require("../config/openai")
module.exports ={

    async sendText(req, res){
        const openaiAPI = openai.configuration()
const inputModel = new InputPrompt(req.body)

        try {
            const response = await openaiAPI.createCompletion(
                openai.textCompletion(inputModel)
            )

            return res.status(200).json({
                sucess:true,
                data: response.data.choices[0].text
            })
        } catch (error) {
            return res.status(400).json({
                sucess:false,
                error: error.response ? error.response.data: "tem um erro no servidor"
            })
        }
return response.status(200).json({
    message: "o pai está on"
})
    }
}