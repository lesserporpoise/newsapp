let scoreArr=[];
let id=0;


module.exports = {
    read: (req,res) =>{
        res.status(200).send(
            "sending the datars...  " +JSON.stringify(scoreArr));
    },
    create:(req,res) =>{

        let {score} = req.body;
        scoreArr.push({id:id,score:score});
        id++;
        res.status(200).send(
            "inputting the datars...  "+JSON.stringify(scoreArr))
    },
    update:(req,res) =>{
        const {score} = req.body;
        const updateID = req.params.id;
        const scoreIndex = scoreArr.findIndex(
            val => {return val.id == updateID});
        let val = scoreArr[scoreIndex];

        scoreArr[scoreIndex] = {
            id: val.id,
            score: score || val.score
        }
        res.status(200).send(
            "modifying your datars...  "+JSON.stringify(scoreArr));
    },
    delete:(req,res) =>{
        const deleteID = req.params.id;
        scoreIndex=scoreArr.findIndex(val => val.id == deleteID);
        scoreArr.splice(scoreIndex,1);
        res.status(200).send(
            "bleachbitting your datars...  "+JSON.stringify(scoreArr));
    }
}