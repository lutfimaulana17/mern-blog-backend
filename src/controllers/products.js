exports.createProduct = (req, res, next) => {
    res.json(
        {
            message: "Create Product Success", 
            data: {
                id: 1, 
                name: req.body.name,
                price: req.body.price
            }
        }
    );
    next();
}

exports.getAllProducts = (req, res, next) => {
    res.json(
        {
            message: "Get All Products Success", 
            data: [
                {
                    id: 1, 
                    name: "Sari Gandum",
                    price: 8000
                },
                {
                    id: 2, 
                    name: "Biskuar",
                    price: 6500
                }
            ]
        }
    );
    next();
}