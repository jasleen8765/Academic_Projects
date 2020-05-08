//7) [40pts] Produce a new collection that contains each hashtag used in the collection of tweets, along with the number of times that hashtag was used.

//Mapper Function
var mapFunction = function() {
    for (var idx = 0; idx < this.entities.hashtags.length; idx++) {
        var key = this.entities.hashtags[idx].text;
        var value = {
            count : 1
        };
        emit(key, value);
    }
};

//Reducer Function
var reduceFunction = function(key, value) {
    var reducedVal = {
        count : 0
    };
    for (var idx = 0; idx < value.length; idx++) {
        reducedVal.count += value[idx].count;
    }
    return reducedVal;
};

//MapReduce Query
db.tweets.mapReduce(mapFunction, reduceFunction, {
    out : "hashtags"
});

//Aggregation Query
db.hashtags.aggregate([
{$project: { tagid: "$_id", totalTagCount: "$value.count", _id:0}},
{$sort:{ totalTagCount:-1}}
]);
