
export const ProfileData = (pageNumber) =>  {
        let data = {
            "totalCount": 6,
            "responseEntity":
              [
                  {
                      "Name": "Jennifer Lawrence",
                      "Age": "22",
                      "LargePicture": "/assets/images/model1.jpeg"
                  },
                  {
                      "Name": "Emma Watson",
                      "Age": "23",
                      "LargePicture": "/assets/images/model2.jpeg"
                  },
                  {
                      "Name": "Anne Hathaway",
                      "Age": "22",
                      "LargePicture": "/assets/images/model3.jpeg"
                  },
                  {
                      "Name": "Natalie Portman",
                      "Age": "28",
                      "LargePicture": "/assets/images/model4.jpeg"
                  },
                  {
                      "Name": "Gal Gadot",
                      "Age": "27",
                      "LargePicture": "/assets/images/model6.jpeg"
                  },
                  {
                      "Name": "Alexandra Daddario",
                      "Age": "22",
                      "LargePicture": "/assets/images/model7.jpeg"
                  }
              ]
        }
       

        if(pageNumber > data.totalCount-1) {
            return Promise.resolve({ "totalCount": 6, "responseEntity": []})
        }
        let newData = {}
        let newResponseEntity = data.responseEntity.splice(pageNumber,1)
        newData["totalCount"] = data.totalCount
        newData["responseEntity"] = newResponseEntity

        return Promise.resolve(newData)
}