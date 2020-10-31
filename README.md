# API Rajaongkir

Integrasi API province dan city Rajaongkir (paket starter, https://rajaongkir.com/dokumentasi/starter),

menggunakan bahasa pemrograman Javascript dengan framework node js,express js

## Instalasai

untuk instalasi package menggunakan node package manager.

```bash
npm install.
```

## Penggunaan

buat file `.env`, dengan mengcopy isi dari file `.env.example`
```env
PORT=
API_KEY=
PROVINCE_URL=https://api.rajaongkir.com/starter/province
CITY_URL=https://api.rajaongkir.com/starter/city
```
Untuk menjalankan aplikasi menggunakan perintah.

```javascript
npm run start
```

**Dokumentasi API**
----
### Get cities
  Menampilkan data json cities/kota

* **URL**

  /cities

* **Method:**

  `GET`
  
* **Success Response:**

  * **Code:** 200 
  *  **Content:** 
```javascript
{
    "rajaongkir": {
        "query": [],
        "status": {
            "code": 200,
            "description": "OK"
        },
        "results": [
            {
                "city_id": "1",
                "province_id": "21",
                "province": "Nanggroe Aceh Darussalam (NAD)",
                "type": "Kabupaten",
                "city_name": "Aceh Barat",
                "postal_code": "23681"
            },
            {
                "city_id": "2",
                "province_id": "21",
                "province": "Nanggroe Aceh Darussalam (NAD)",
                "type": "Kabupaten",
                "city_name": "Aceh Barat Daya",
                "postal_code": "23764"
            }
        ]
     }
}
```
 
* **Error Response:**

  * **Code:** 500 
  * **Content:** `{ error : error.message }`

### Get cities By param
  Menampilkan data json cities/kota By param Id

* **URL**

  /cities?searchKey=

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Success Response:**

  * **Code:** 200 
  * **Response:** 
```javascript
{
    "rajaongkir": {
        "query": {
            "id": "1"
        },
        "status": {
            "code": 200,
            "description": "OK"
        },
        "results": {
            "city_id": "1",
            "province_id": "21",
            "province": "Nanggroe Aceh Darussalam (NAD)",
            "type": "Kabupaten",
            "city_name": "Aceh Barat",
            "postal_code": "23681"
        }
    }
}
```
 
* **Error Response:**

  * **Code:** 500 
  * **Response:** `{ error : error.message }`

### Get provinces
  Menampilkan data json provinces/ provinsi

* **URL**

   /provinces

* **Method:**

  `GET`
  
* **Success Response:**

  * **Code:** 200 
  *  **Response:** 
```javascript
{
    "rajaongkir": {
        "query": [],
        "status": {
            "code": 200,
            "description": "OK"
        },
        "results": [
           {
                "province_id": "1",
                "province": "Bali"
            },
            {
                "province_id": "2",
                "province": "Bangka Belitung"
            }

        ]
     }
}
```
 
* **Error Response:**

  * **Code:** 500 
  * **Response:** `{ error : error.message }`

### Get provinces By param
  Menampilkan data json provinces /provinsi by param Id

* **URL**

 /province?searchKey=

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Success Response:**

  * **Code:** 200 
  * **Response:** 
```javascript
{
    "rajaongkir": {
        "query": {
            "id": "1"
        },
        "status": {
            "code": 200,
            "description": "OK"
        },
        "results": {
            "province_id": "1",
            "province": "Bali"
        }
    }
}
```
 
* **Error Response:**

  * **Code:** 500 
  * **Response:** `{ error : error.message }`
