from PIL import Image
import stepic
import flask
img = ""
secret = ""
encoded_image = ""

img = input("enter name and extension of image you want to encode: ")
img = img.strip()
img = Image.open(img)



secret = input("Please enter the message you want to encode an image with:  ")

secret = secret.encode()

encoded_image = stepic.encode(img, secret)

encoded_image = input("enter new image name with extension: ")
encoded_image.save(encoded_image)

print("Encryption completed ")