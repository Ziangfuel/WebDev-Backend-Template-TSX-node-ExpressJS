
class mockController {
    mockFunction = async (req, res) => {
        console.log("Mock Function--" + req.url);
        return res.status(200).send({});
    }
}


module.exports = new mockController();