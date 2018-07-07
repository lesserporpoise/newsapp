let scoreArr=[
    {ID:1,Score:0},
    {ID:2,Score:0},
    {ID:3,Score:0},
    {ID:4,Score:0},
    {ID:5,Score:0},
    {ID:6,Score:0},
    {ID:7,Score:0},
    {ID:8,Score:0},
    {ID:9,Score:0},
    {ID:10,Score:0},
    {ID:11,Score:0},
    {ID:12,Score:0},
    {ID:13,Score:0},
    {ID:14,Score:0},
    {ID:15,Score:0},
    {ID:16,Score:0},
    {ID:17,Score:0},
    {ID:18,Score:0},
    {ID:19,Score:0},
    {ID:20,Score:0}
];
let id=21;


module.exports = {
    read: (req,res) =>{
        res.status(200).send(JSON.stringify(scoreArr));
    },
    create:(req,res) =>{

        let {score} = req.body;
        scoreArr.push({ID:id,Score:score*1});
        id++;
        res.status(200).send(JSON.stringify(scoreArr))
    },
    update:(req,res) =>{
        const {score} = req.body;                       
        const updateID = req.params.ID;                 
        const scoreIndex = scoreArr.findIndex(          
            val => {return val.ID == updateID});        
        let val = scoreArr[scoreIndex];                     
        scoreArr[scoreIndex] = {                        
            ID: val.ID,                                 
            Score: score*1 || val.score*1
        }
        res.status(200).send(JSON.stringify(scoreArr));
    },
    delete:(req,res) =>{
        const deleteID = req.params.ID;
        scoreIndex=scoreArr.findIndex(val => val.ID == deleteID);
        scoreArr.splice(scoreIndex,1);
        res.status(200).send(JSON.stringify(scoreArr));
    }
}