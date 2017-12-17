/**
 * Created by futailin on 12/12/17.
 */
module.exports = function (app) {
    app.get('/cbm', function (req, res) {
        res.render('cbm', {
            probA: 'Probability1',
            probB: 'Probability2',
            sum: '',
            judge: '',
            cred1: 'Credibility1',
            cred2: 'Credibility2'
        });
    });

    app.post('/cbm', function (req, res) {
        console.log('receive:', req.body.prob1, req.body.prob2);
        var sum = parseFloat(req.body.prob1) * parseFloat(req.body.range2)
            + parseFloat(req.body.prob2) * (1 - parseFloat(req.body.range2));
        var judge = '';
        var cred1 = req.body.range2;
        var cred2 = 1 - req.body.range2;
        if (sum > 0.5) {
            judge = 'High chance!'
        } else {
            judge = 'Low chance!'
        }
        console.log('sum = ',sum);

        res.render('cbm', {
            probA: req.body.prob1,
            probB: req.body.prob2,
            sum: sum.toFixed(2),
            judge: judge,
            cred1: cred1,
            cred2: cred2.toFixed(2)
        });
    });

    app.delete('/cbm', function (req, res) {

    });

};