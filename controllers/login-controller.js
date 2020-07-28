const Profile = require ('../schemas/profile');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const bcrypt = require('bcrypt');

//Login post method
/**
 *
 * @param res
 * @param req - it must have a email and a password
 */
const login = function(req, res){
    const name = req.body.name;
    const password = req.body.PIN;

    Profile.findOne({name: name}, (err, profile) => {
        if(err){
            res.status(500).send({
                status: "ERROR",
                message: "Cannot make the request"
            })
        }else{
            if(!profile){
                res.status(404).send({
                    status: "ERROR",
                    message: "Profile not found"
                })
            }else{
                bcrypt.compare(password, profile.PIN, function(err, isMatch) {
                    if (err){
                        return res.send({
                            status: 'ERROR',
                            message: err
                        })
                    }
                    if(isMatch){
                        var token = jwt.sign(profile.toJSON(), process.env.JWT_KEY);
                        return res.status(200).send({
                            status: 'LOGIN',
                            data: token
                        })
                    }else{
                        res.send({
                            status: 'WRONG_PASSWORD',
                            message: 'Passwords doesn\'t match.'
                        })
                    }
                });
            }
        }
    });
};

module.exports = { login };
