import Knex from 'knex';

export async function up (knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('user')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP')) //MUDAR ISSO PARA now() depois
        .notNullable();
    })
}

export async function down (knex: Knex){
    return knex.schema.dropTable('connections');
}
