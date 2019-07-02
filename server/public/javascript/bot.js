const superagent = require("superagent");
class bot{
    constructor(){
        this.url = "http://i.itpk.cn/api.php"
        this.api_key = "5ce55ed422723e24bf34184e08513ae1";
        this.api_secret = "mvzs41x8pldt";
        this.news = "https://newsapi.org/v2/top-headlines";
        this.news_api = "0fcc67386c264d29b532a1e1a9207443";
    }
    getRobotAns(room, word, socket){
        superagent.get(this.url)
            .query({question: word, api_key: this.api_key, api_secret: this.api_secret})
            .end(function(err, res){
                if (err){
                    console.log(err);
                }else{
                    socket.emit("message", {name: "robot", room: "lobby", text: res.text})
                }
            })
        }
    getNews(room, io){
        superagent.get(this.news)
            .query({country: "us", apiKey: this.news_api})
            .end((err, res)=>{
                if(err){
                    console.log(err);
                }else{
                    var choice = this.getRandomInt(0, res.body.articles.length)
                    io.sockets.emit("news", res.body.articles[choice])
                }
            })
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

exports.Bot = bot;
