
const fs = require("fs")

module.exports = {
    read: function(fileName, encoding = "utf-8"){
        return JSON.parse(fs.readFileSync(fileName, encoding))
    },

    write: function(fileName, content, data_format = "json", encoding = "utf-8"){

        let data
        if (data_format === "json"){
            data = JSON.stringify(content)
            fs.writeFileSync(fileName, data, encoding)
        }else if(data_format === "plan_text"){
            data = content    
        }

        fs.writeFileSync(fileName, data, encoding)
        return data
    }
}