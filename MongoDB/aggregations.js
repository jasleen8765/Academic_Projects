//3) [10pts] Produce a list of users, together with the total number of times they tweeted, sorted in decreasing order.
db.tweets.aggregate([ 
{"$group" : {_id:"$user.id", tweets_count:{$sum:1}}},
{$sort:{tweets_count:-1}}
]);

//4) [10pts] Produce a list of place names, together with the total number of tweets from that place name, sorted in decreasing order.
db.tweets.aggregate([ 
{"$group" : {_id:"$place.full_name", place_count:{$sum:1}}},
{$sort:{place_count:-1}}
]);

//5) [15pts] Produce a list of users, together with the total number of replies to that user, sorted in decreasing order.
db.tweets.aggregate([ 
{"$group" : {_id:"$in_reply_to_user_id", replies_count:{$sum:1}}},
{$sort:{replies_count:-1}}
]);

//6) [15pts] Produce a list of users, together with the total number of hashtags used by that user, sorted in decreasing order.
db.tweets.aggregate([
{$project: { userid: "$user.id", counth: { $size: "$entities.hashtags" }}},
{"$group" : {_id:"$userid", count:{$sum : "$counth"}}},
{$sort:{count:-1}}
]);
