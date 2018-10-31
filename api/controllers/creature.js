const query_handler = require("../base");

exports.creature_get_all = async (req, res, next) => {

    let creatures = await query_handler.select_creature_all();


    res.status(200).json({
        count: creatures.length,
        orders: creatures.map(creature => {
            return {
                guid: creature.guid,
                id: creature.id,
                map: creature.map
            };
        })
    });


};

