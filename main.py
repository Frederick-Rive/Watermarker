from PIL import Image
import stepic
import flask
img = ""
secret = ""
option = ""
while True:
    print("1. Encode image")
    print("2. Decode image")
    print("3. Exit")

    choice = input("Enter option: ")
    choice = choice.strip()

    if choice == "1":

     print("ENCODE IMAGE")


    img = Image.open =  input("enter name and extension of image you want to encode:  ")
    img = img.strip()

    secret = input ("Please enter the message you want to encode an image with:  ")

    secret = secret.encode()

    encoded_image = stepic.encode(img,secret)

    encoded_image.save  = input("enter new image name with extension: ")

    print("Encryption completed ")



    elif(choice = "2"):

        print("DECODE IMAGE")


    img = Image.open = input("enter name and extension of image you want to decode:  ")
    img = img.strip()
    decoded_secret = stepic.decode(img)
    print("image has been decoded")
    print("secret: ", decoded_secret)



    elif (choice == "3"):



    else:

    print("Error option does not exist")








