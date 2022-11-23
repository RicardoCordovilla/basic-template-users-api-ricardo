const adminValidate = (req, res, next) => {
    const role = req.user.usertype
    console.log(role)
    if (role === 'admin') {
        return next()
    }
    else
        return res.status(401).json({ message: 'No authorazed acount' })
}

module.exports = adminValidate