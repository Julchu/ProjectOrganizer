// This is the main configuration file for passport and login stuff

// const passport = require('passport');
const LocalStrategy = require('passport-local');
const sql = require('../routes/sql.js');
const User = require('../objects/User.js').User;


module.exports = (passport) => {

    passport.serializeUser( (user, done) => {
        // console.log("Serializing:", user.data);
        done(null, user.data["UserID"]);
    })

    passport.deserializeUser( async (userId, done) => {
        // console.log("Deserializing:", userId);
        try {
            // let userId = await sql.existingUserIndex(username);
            let user = new User();
            //await user.loadUser(userId);
            return user.loadUser(userId).then( () => {
                // console.log("Deserialized", userId, "into", user.data);
                // user.speak();
                return done(null, user)
            });
        } catch (error) {
            done(error);
        }
    })

    passport.use("signup", new LocalStrategy({
        usernameField: "newUser",
        passwordField: "newPass",
        passReqToCallback: true
    }, (req, username, password, done) => {
        process.nextTick( async () => {
            try {
                // console.log("Signing up!");
                let userId = await sql.existingUserIndex(username); // wait for braydon
                if (userId) {
                    // console.log("User already exists with that id!");
                    return done(null, false); // flash or no
                }
                else {
                    // do stuff for a user
                    // console.log("Let's try making this user!");
                    userId = await sql.createUser(username, req.body.email, password);
                    let user = new User();
                    return user.loadUser(userId).then( () => {
                        // console.log("Bibi", user)
                        return done(null, user);
                    });
                }
            } catch (error) {
                return done(error);
            }
        });
    }));

    passport.use("login", new LocalStrategy({
        usernameField: "user",
        passwordField: "pass",
        passReqToCallback: true
    }, (req, username, password, done) => {
        process.nextTick( async () => {
            try {
                // console.log("Logging in!");
                let userId = await sql.existingUserIndex(username); // wait for braydon
                // bad password
                // User exists and the password sucks
                if (userId && !(await sql.authUser(username, password))) {
                    // console.log("Wrong password!");
                    return done(null, false); // flash or no
                }
                // no user
                else if (!userId) {
                    // console.log("User does not exist!");
                    // do stuff for a user
                    return done(null, false);
                }
                // console.log("Able to log in successfully!");
                let user = new User();
                // console.log(user);
                return user.loadUser(userId).then( () => {
                    // console.log("Bibi", user)
                    return done(null, user);
                });
            } catch (error) {
                return done(error);
            }
        });
    }));
}

// lets show a push!