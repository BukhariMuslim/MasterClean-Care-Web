<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
<<<<<<< HEAD

class ExampleTest extends TestCase
{
=======
use App\Models\User;

class ExampleTest extends TestCase
{
	use DatabaseMigrations;
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
    /**
     * A basic test example.
     *
     * @return void
     */
<<<<<<< HEAD
    public function testBasicTest()
    {
        $this->assertTrue(true);
    }
=======
    public function setUp()
    {
    	parent::setUp();
    	$this->seed('UserTableSeeder');
    }

    public function testBasicTest()
    {
        $this->assertCount(8, User::all());
    }

    public function testCanAccessLoginPage()
    {
    	$response = $this->get('login');
    	$this->assertEquals(200, $response->getStatusCode());
    }


    public function testUserCantAccessLoginPage()
    {
        $this->actingAs(User::first());
        $response = $this->get('login');
        $response->assertStatus(302);
    }

>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
}
