
class mockController {
    mockFunction = async (req, res) => {
        console.log("Mock Function--" + req.url);

        // console.log(req.body);  // an object

        // An obj
        const response = {

        };

        return res.status(200).send(response);
    }
}


module.exports = new mockController();