let driver = require('../config/neo4j.js');
let session = driver.session();

module.exports={
addquestion: function(req, res) {
        console.log(req.body.title);
        {/*req.body.heading = req.body.heading.charAt(0).toUpperCase() +
        req.body.heading.substring(1, req.body.heading.length);
        req.body.statement = req.body.statement.charAt(0).toUpperCase() +
        req.body.statement.substring(1, req.body.statement.length);
                        let query = 'match (c:Concept), \
                            (u:User {name:"' + req.body.email + '"}) \
                            where c.name = "' + arr[max] + '" \
                            create (n:Question {Content:"' + req.body.statement + '",name:"' + req.body.heading + '"}), \
                            (n)-[:question_of{intent:"' + req.body.intent + '"}]->(c), \
                            (u)-[:post {on : timestamp()}]->(n), \
                            (l:Like {count:0}), \
                            (dl:Unlike {count:0}), \
                            (n)-[:has]->(l), \
                            (n)-[:has]->(dl) \
                            return n \
                            ';
                            console.log(query);
                /*eslint-enable
                session.run(query).then(function(result) {
                    console.log(result.records);
                    if (result) {
                        /*eslint-disabl
                        let id = result.records[0]._fields[0].identity.low;
                        let date = new Date().getTime();
                        /*eslint-enable
                        let db = new List({
                            id: id,
                            category: req.body.Concept,
                            tags: req.body.Concept,
                            heading: req.body.heading,
                            question: req.body.statement,
                            displayImage: imagesArray[randomNumber],
                            profileImage: req.body.profilepicture,
                            addedOn: date,
                            upVotes: '0',
                            downVotes: '0',
                            answerCounts: '0',
                            postedBy: req.body.email,
                            status: {
                                open: true
                            },
                            topCards: [],
                            views: '0'
                        });
                        db.save(function(err) {
                            if (err) {
                                // res.send('Error:' + err);
                            } else {
                                // res.send('successfully posted');
                            }
                        });
                        userList.findOneAndUpdate({
                            emailId: req.body.email
                        }, {
                            $push: {
                                lists: {
                                    id: id,
                                    heading: req.body.heading,
                                    category: req.body.Concept,
                                    statement: req.body.statement,
                                    image: '',
                                    displayImage: imagesArray[randomNumber],
                                    addedOn: new Date().getTime(),
                                    upVote: '0',
                                    postedBy: req.body.email,
                                    acceptedCount: '0',
                                    downVote: '0'
                                }
                            }
                        }, {new: true}).then((doc) => {
                            res.send(doc);
                            // res.redirect('/#/home');
                        }, () => {
                            // res.send(err);
                        });
                    } else {
                        // logger.debug('error occurred');
                    }
                });
            }
        });*/}
    }
  };
