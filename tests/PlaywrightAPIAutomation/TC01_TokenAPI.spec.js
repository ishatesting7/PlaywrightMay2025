// curl -X POST \
//   https://restful-booker.herokuapp.com/auth \
//   -H 'Content-Type: application/json' \
//   -d '{
//     "username" : "admin",
//     "password" : "password123"
// }'

import { test, expect } from '@playwright/test';

test('Generate the Auth Token - Positive', async({request})=>{

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

    expect(responseBody).toHaveProperty("token");
    
});

test('Generate the Auth Token - Negative', async({request})=>{

    const response = await request.post('https://restful-booker.herokuapp.com/auth',{
        headers:{
            'Content-Type':'application/json'
        },
        data:{
        username : "admn", //400 Bad Request
        password : "password123"
        }
    })

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Body -- ', responseBody);

    
});

test('GET call - Booking ID', async({request})=>{

    const response = await request.get('https://restful-booker.herokuapp.com/booking');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Body -- ', responseBody);

    const count = responseBody.length;
    console.log(`The Number of Booking ID - ${count}`);
    for (const res of responseBody)
    {
    expect(res).toHaveProperty('bookingid');
    }

})


test('GET call - For Specific Booking ID', async({request})=>{

    const response = await request.get('https://restful-booker.herokuapp.com/booking');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Body -- ', responseBody);

    const count = responseBody.length;

    const bookingIds = responseBody.map(temp =>temp.bookingid);

    const bookid = Math.max(...bookingIds);
    console.log('Highest Value -- ', bookid);
    
    console.log(`The Number of Booking ID - ${count}`);
    for (const res of responseBody)
    {
    expect(res).toHaveProperty('bookingid');
    }

    const res1 = await request.get(`https://restful-booker.herokuapp.com/booking/${bookid}`);
    expect(res1.ok()).toBeTruthy();
    expect(res1.status()).toBe(200);
    const resbod1 = await response.json();
    console.log('Response Body -- ', resbod1);

})