'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('reservation', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fk_id_room: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "Room",
                    key: "id",
                    as: "fk_id_room"
                }
            },
            fk_id_schedule: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "Schedule",
                    key: "id",
                    as: "fk_id_schedule"
                }
            },
            fk_id_user: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "User",
                    key: "id",
                    as: "fk_id_user"
                }
            },
            reservationDate: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });
    },

    async down (queryInterface) {
        await queryInterface.dropTable('reservation');
    }
};
