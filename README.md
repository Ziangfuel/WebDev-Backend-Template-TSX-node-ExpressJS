# WebDev-Backend-Template-ExpressJS
template for quick development

- no crediential verification so far



## Backend Side
### Reading Request obj
`console.log(req.body);  // an object`


### Returning obj
`res.status(200).send(response);`
- response is an obj

## Frontend Side
### Sending Request obj
`const res = await sfHttpCommon.post('/mock', requestBody);`

http-com fle
```
import axios from 'axios';

const axiosConfig = { withCredentials: false };

const sfHttpCommon = axios.create({
    baseURL: "http://192.168.35.117:15009/app_api/",
    headers: {
        "Content-type": "application/json",
        //"rejectUnauthorized": "false",
        "mode": "cors","crossDomain": "true"
    }
});

export {
    sfHttpCommon, axiosConfig
}
```

### Reading return obj
`res.status`, `res.data`
