const superagent = require("superagent");
class bot{
    constructor(){
        this.url = "http://i.itpk.cn/api.php"
        this.api_key = "5ce55ed422723e24bf34184e08513ae1";
        this.api_secret = "mvzs41x8pldt";
    }
    getRobotAns(room, word){
        superagent.get(this.url)
            .query({question: word, api_key: this.api_key, api_secret: this.api_secret})
            .end(function(err, res){
                if (err){
                    console.log(err);
                }else{
                    console.log(res.text);
                    return res.text;
                }
            })
        }
}

exports.Bot = bot;
