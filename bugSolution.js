```javascript
// Correct use of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id": ObjectId("651e7872d660772177c84d6c")}, {"$inc": {"count": 10 }});
```