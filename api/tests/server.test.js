import supertest from 'supertest';
import app from '../index.js';


describe("Testing the summary API endpoint", () => {

	it("GET base route and returns 200 for status", async () => {

		const response = await supertest(app).get('/v1/summary?limit=1');

		expect(response.status).toBe(200);
		expect(response.body.length).toEqual(1);
		expect(response.body).toEqual([{"year": 1979,"state_abbr": "AK","state_name": "Alaska","population": 406000,"violent_crime": 1994,"homicide": 54,"rape": 292,"robbery": 445,"aggravated_assault": 1203,"property_crime": 23193,"burglary": 5616,"larceny": 15076,"motor_vehicle_theft": 2501}])

	});
	it("GET /years route and returns 200 for status", async () => {

		const response = await supertest(app).get('/v1/summary/years');

		expect(response.status).toBe(200);
		expect(response.body.length).toEqual(41); //range of years for endpoint
		expect(Array.isArray(response.body)).toBeTruthy();
		expect(response.body).toEqual([1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]);

	});
	it("GET /years/:year route and returns 200 for status", async () => {

		const response = await supertest(app).get('/v1/summary/years/2001?limit=1&fields=homicide');

		expect(response.status).toBe(200);
		expect(response.body.length).toEqual(51); //50 states + DC
		expect(response.body[0]).toEqual({"year":2001,"state_abbr":"AK","state_name":"Alaska","homicide":39});

	});
	it("GET /years/:year route and return 404 error for wrong field name", async () => {

		const response = await supertest(app).get('/v1/summary/years/2001?limit=1&fields=homicides');

		expect(response.status).toBe(404);
		expect(response.body).toEqual({"message":"'homicides' field not found. Please refer to object schema for correct fields."});

	});
	it("GET /years/:year route and return 404 error for year out of range", async () => {

		const response = await supertest(app).get('/v1/summary/years/2025');

		expect(response.status).toBe(404);
		expect(response.body).toEqual({"message":"The specified year must be between 1979-2019."});

	});
	it("GET /years/:yearstart/:yearend route and returns 200 for status", async () => {

		const response = await supertest(app).get('/v1/summary/years/2001/2003?fields=homicide');

		expect(response.status).toBe(200);
		expect(response.body.length).toEqual(153); //50 states + DC * 3 years
		expect(response.body[0]).toEqual({"year":2001,"state_abbr":"AK","state_name":"Alaska","homicide":39});
		expect(response.body[response.body.length-1]).toEqual({"year":2003,"state_abbr":"WY","state_name":"Wyoming","homicide":14});

	});
	it("GET /years-total route and returns 200 for status", async () => {

		const response = await supertest(app).get('/v1/summary/years-total/');

		expect(response.status).toBe(200);
		expect(response.body.length).toEqual(41);
		expect(response.body[0].year).toEqual(1979);
		expect(response.body[0].homicide).toEqual(21460);

		expect(response.body[response.body.length-1].year).toEqual(2019);
		expect(response.body[response.body.length-1].homicide).toEqual(16425);

	});
	it("GET /years-total/:year route and returns 200 for status", async () => {

		const response = await supertest(app).get('/v1/summary/years-total/2018');

		expect(response.status).toBe(200);
		expect(response.body[0]).toEqual({"year":2018,"population":326687501,"violent_crime":1252399,"homicide":16374,"rape":143765,"robbery":281278,"aggravated_assault":810982,"property_crime":7219084,"burglary":1235013,"larceny":5232167,"motor_vehicle_theft":751904});

	});
	it("GET /years-total/:yearstart/:yearend route and returns 200 for status", async () => {

		const response = await supertest(app).get('/v1/summary/years-total/2001/2008');

		expect(response.status).toBe(200);
		expect(response.body.length).toEqual(8); 
		expect(response.body[0].year).toEqual(2001);
		expect(response.body[response.body.length-1].year).toEqual(2008);

	});
	it("GET /states route and returns 200 for status", async () => {

		const response = await supertest(app).get('/v1/summary/states');

		expect(response.status).toBe(200);
		expect(response.body.length).toEqual(51);
		expect(response.body).toEqual(["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"]);

	});
});

describe("Testing the arrests API endpoint", () => {

	it("GET base route and returns true for status", async () => {

		const response = await supertest(app).get('/v1/arrests');

		expect(response.status).toBe(200);
	});

});

describe("Testing the Arrests API endpoint", () => {

	it("GET base route and returns true for status", async () => {

		const response = await supertest(app).get('/v1/drug-arrests');

		expect(response.status).toBe(200);
	});

});

describe("Testing the juvenile arrests API endpoint", () => {

	it("GET base route and returns true for status", async () => {

		const response = await supertest(app).get('/v1/juvenile-arrests');

		expect(response.status).toBe(200);
	});

});