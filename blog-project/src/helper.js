export const BASE_URL = "https://django-blog-api-qutt.onrender.com/api/v1/"
//export const BASE_URL = "http://127.0.0.1:8000/api/v1/"

export const axiosConfig = {
    headers: {
        "Authorization": "token " + sessionStorage.getItem("token")
    }
} 