from PIL import Image
import stepic
import flask
img = ""
secret = ""
option = ""
encoded_image = ""
decoded_secret = ""

img =  input("enter name and extension of image you want to decode:  ")
img = img.strip()
img = Image.open(img)
decoded_secret = stepic.decode(img)
print("image has been decoded")
print("secret: ", decoded_secret)