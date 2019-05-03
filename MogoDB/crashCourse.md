
## select database
    use DATABASE_NAME
## selected database, use the command db
    db
    show dbs
    show databases

## drop database
    db.dropDatabase()

## create collection
    db.createCollection(name, options)
    db.createCollection(‘tutorialspoint’)

## collection
    show collections

## Insert
    db.COLLECTION_NAME.insert(document)
    db.movie.insert({"name":"monog tutorials"})

db.post.insert([
   {
      title: 'MongoDB Overview 2', 
      description: 'MongoDB 2 is no sql database',
      by: 'vikask',
      url: 'http://www.vikask.com',
      tags: ['react', 'NoSQL'],
      likes: 100
   },
   {
      title: 'React', 
      description: "NoSQL database doesn't have tables",
      by: 'tutorials point',
      url: 'http://www.mongotutorialstest.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 20, 
      comments: [	
         {
            user:'user1',
            message: 'My first comment',
            dateCreated: new Date(2013,11,10,2,35),
            like: 0 
         }
      ]
   }
])

## drop collection
    db.COLLECTION_NAME.drop()

    db.COLLECTION_NAME.find()

    db.post.find().pretty()

=====================
## Equality
    db.post.find({"by":"tutorials point"}).pretty()

## Less Than
    db.post.find({"likes":{$lt:50}}).pretty()

## Greater Than
    db.post.find({"likes":{$gt:50}}).pretty()

## Greater Than Equals
    db.post.find({"likes":{$gte:50}}).pretty()

## Not Equals 
    db.post.find({"likes":{$ne:50}}).pretty()

## AND in MongoDB
    db.post.find(
    {
        $and: [
            {key1: value1}, {key2:value2}
        ]
    }
    ).pretty()

## Find
    db.post.find({$and:[{"by":"tutorials point"},{"title": "MongoDB Overview"}]}).pretty() {

    db.COLLECTION_NAME.remove(DELLETION_CRITTERIA)

## remove only one
    db.COLLECTION_NAME.remove(DELETION_CRITERIA,1)
## remove all documents
    db.post.remove()

## MongoDB - Projection

## The find() Method

    db.COLLECTION_NAME.find({},{KEY:1})

    db.post.find({},{"title":1,_id:0})

## Limit
    db.COLLECTION_NAME.find().limit(NUMBER)
    db.post.find({},{"title":1,_id:0}).limit(2)

## Skip number of documents
    db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)

## The sort() Method
    db.COLLECTION_NAME.find().sort({KEY:1})

## MongoDB - Indexing
    db.COLLECTION_NAME.ensureIndex({KEY:1})
    db.post.ensureIndex({"title":1})

## With multiple field
    db.post.ensureIndex({"title":1,"description":-1})

db.post.getIndexes();
db.post.dropIndex( { "title": 1 } );

# Aggregation
db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
## Sum
db.post.aggregate([{$group : {_id : "$by", sum_of_tutorial : {$sum : 1}}}])
## Avg
db.post.aggregate([{$group : {_id : "$by", avg_tutorial : {$avg : "$likes"}}}])
## Min
db.post.aggregate([{$group : {_id : "$by", min_tutorial : {$min : "$likes"}}}])
## Max
db.post.aggregate([{$group : {_id : "$by", max_tutorial : {$max : "$likes"}}}])
## Push Inserts the value to an array in the resulting document.
db.post.aggregate([{$group : {_id : "$by", url : {$push: "$url"}}}])
## AddToSet but does not create duplicates.
db.post.aggregate([{$group : {_id : "$by", url : {$addToSet : "$url"}}}])
## First Gets the first document from the source documents according to the grouping.
db.post.aggregate([{$group : {_id : "$by", first_tutorial : {$first : "$likes"}}}])
## Last Gets the first document from the source documents according to the grouping.
db.post.aggregate([{$group : {_id : "$by", first_tutorial : {$last : "$likes"}}}])
