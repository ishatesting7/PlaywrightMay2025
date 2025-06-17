import { test, expect } from '@playwright/test';

let bookingId, token
test('Generate the Auth Token - For PUT Request', async({request})=>{

    const response = await request.post('https://restful-booker.herokuapp.com/auth',{
        headers:{
            'Content-Type':'application/json'
        },
        data:{
        username : "admin",
        password : "password123"
        }
    })

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Body -- ', responseBody);
    token = responseBody.token;
    expect(responseBody).toHaveProperty("token");
    console.log(token);

});

test('Creat a new Record', async({request})=>{

    const response = await request.post('https://restful-booker.herokuapp.com/booking   ',{
        headers:{
            'Content-Type':'application/json'
        },
        data:{
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
    })

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Body -- ', responseBody);

    expect(responseBody).toHaveProperty("booking");
   
    const val = responseBody.booking.bookingdates.checkin
    console.log(val);

    bookingId = responseBody.bookingid;
    expect(responseBody.booking.firstname).toBe('Jim');
    
});

test('Update the record', async({request})=>{

    const response = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`,{
        headers:{
            'Content-Type':'application/json',
            'Cookie':`token=${token}`,
            'Accept':'application/json'
        },
        data:{
            "firstname" : "James",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
    })

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Body -- ', responseBody);

    expect(responseBody.firstname).toBe('James');

});


test('Delete the Record', async({request})=>{

    const response = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingId}`,{
        headers:{
            'Content-Type':'application/json',
            'Cookie':`token=${token}`,
            'Accept':'application/json'
        }
    })

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);


});

test('Create ReqRes Record', async({request})=>{

    const res = await request.post('https://reqres.in/api/users',{

    headers:{
        'Content-Type':'application/json',
        'x-api-key':'reqres-free-v1'
    },
    data:{     
                "name": "morpheus111",
                "job": "leader"        
    }
    })

    expect(res.status()).toBe(201);



    
})