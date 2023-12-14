const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
});

const UserReview = sequelize.define('UserReview', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    review: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    targetId: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
});

// Определение модели Deal
const Deal = sequelize.define('Deal', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tenant: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    ownerApproveDeal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    ownerCloseDeal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    tenantApproveDeal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    tenantCloseDeal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    tourism: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    homeFuns: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    tools: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    devices: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    img1: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    img2: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    img3: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    condition: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    hidden: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    subCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

const SubCategory = sequelize.define('SubCategory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    videogames: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    books: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    music: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    boardgames: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

const User = sequelize.define('User', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    phone: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    avatar: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    about: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    city: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    metro: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

SubCategory.belongsTo(Category, { foreignKey: 'categoryId' });
UserReview.belongsTo(User, { foreignKey: 'userId' });
Item.belongsTo(SubCategory, { foreignKey: 'subCategoryId' });
Deal.belongsTo(Item, { foreignKey: 'itemId' });
Item.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync({ force: true }).then(() => {
    console.log('Таблицы созданы');
});
