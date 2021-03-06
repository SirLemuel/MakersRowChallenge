var express = require('express');
var brandStore = require('json-fs-store')('store/companies');
var router = express.Router();

/* GET a list of brands */
router.get('/', function(req, res, next) {
    brandStore.list(function(err, brands) {
        if (err) throw err;

        function checkCompany(company) {
          return company.company_type === 'brand';
        }
        res.json(brands.filter(checkCompany));
    });
});

/* GET single brand */
router.get('/:id', function(req, res, next) {
    brandStore.load(req.params.id, function(err, brand) {
        if (err) throw err;

        res.json(brand);
    });
});

/* Create a new brand resource */
router.post('/', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);

    var newBrand = {
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        city: req.body.city,
        state: req.body.state,
        company_type: "brand"
    };
    brandStore.add(newBrand, function(err) {
        if (err) throw err;

        res.json(newBrand);
    });
});

/* Remove a brand resource */

router.delete('/:id', function(req, res, next) {
  brandStore.remove(req.params.id, function(err) {
    if(err) throw err;
    res.json(true);
  });
});

module.exports = router;
