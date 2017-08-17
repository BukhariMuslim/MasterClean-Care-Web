<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(VoyagerDatabaseSeeder::class);

        $this->call(OauthClientsTableSeeder::class);
        $this->call(OauthPersonalAccessClientTableSeeder::class);

        $this->call(PlacesTableSeeder::class);
        $this->call(AdditionalInfosTableSeeder::class);
        $this->call(WalletsTableSeeder::class);
        $this->call(LanguagesTableSeeder::class);
        $this->call(WorkTimesTableSeeder::class);
        $this->call(JobsTableSeeder::class);
        $this->call(TaskListTableSeeder::class);

        $this->call(UserTableSeeder::class);
        $this->call(UserContactTableSeeder::class);
        // $this->call(UserWalletTableSeeder::class);
        $this->call(UserAdditionalInfoTableSeeder::class);
        $this->call(UserJobTableSeeder::class);
        $this->call(UserLanguageTableSeeder::class);
        $this->call(UserWorkTimeTableSeeder::class);
        $this->call(UserDocumentsTableSeeder::class);

        $this->call(OrdersTableSeeder::class);
        $this->call(OrderContactsTableSeeder::class);
        $this->call(OrderTaskListTableSeeder::class);
        $this->call(OffersTableSeeder::class);
        $this->call(OfferContactsTableSeeder::class);
        $this->call(OfferArtsTableSeeder::class);
        $this->call(ReviewOrdersTableSeeder::class);

        // $this->call(ArticlesTableSeeder::class);
        // $this->call(CommentsTableSeeder::class);
        $this->call(PasswordResetsTableSeeder::class);
        $this->call(WalletTransactionsTableSeeder::class);
        $this->call(MessageTableSeeder::class);
        $this->call(EmergencyCallsTableSeeder::class);
        $this->call(CritismsTableSeeder::class);
        $this->call(ReportsTableSeeder::class);
    }
}
