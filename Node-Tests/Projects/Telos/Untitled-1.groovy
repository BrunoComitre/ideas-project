node ace migration:fresh        Drop all tables and re-migrate the database
node ace migration:refresh      Rollback and migrate database
node ace migration:reset        Rollback all migrations
node ace migration:rollback     Rollback migrations to a specific batch number
node ace migration:run          Migrate database by running pending migrations
node ace migration:status


              table.increments('passenger_id')
            table.boolean('survived')
            table.integer('pclass')
            table.text('name_person')
            table.text('sex')
            table.integer('age')
            table.integer('siblings_spouses_aboard')
            table.integer('parents_children_aboard')
            table.text('ticket')
            table.integer('fare')
            table.integer('cabin')
            table.integer('embarked')


 VALUES(1, 0, 3, 'Braund, Mr. Owen Harris','male',22'A/5 21,1,0,171',7.25,'NaN','S');
