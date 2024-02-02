import Sequelize from 'sequelize';

const sequelize = new Sequelize(
'gadgetdb', //Database name
'root', //Database username
'1264161995a', //Database password
{
    dialect:'mysql', //What a database
    host:'localhost' //Where is database
}
)

export default sequelize;