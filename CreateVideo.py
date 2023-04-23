import os
import cv2


path = "Images"

images = []


for file in os.listdir(path):
    name, ext = os.path.splitext(file)

    if ext in ['.gif', '.png', '.jpg', '.jpeg','.jfif']:
        file_name = path+"/"+file

        #print(file_name)
               
        images.append(file_name)
        
print(len(images))
print(images)
length = len(images)
frame = cv2.imread(images[0])
height, width, channels = frame.shape
size = (width,height)
print(size)
sunset = cv2.VideoWriter("sunset.mp4",cv2.VideoWriter_fourcc(*"DIVX"),5,size)
sunrise = cv2.VideoWriter("sunrise.mp4",cv2.VideoWriter_fourcc(*"DIVX"),10,size)
for a in range(length-1,0,-1):# 0,length-1 = sunset , length-1,0,-1= sunrise
    frame = cv2.imread(images[a])
    sunrise.write(frame)
for a in range(0,length-1):# 0,length-1 = sunset , length-1,0,-1= sunrise
    frame = cv2.imread(images[a])
    sunset.write(frame)
sunset.release()
sunrise.release()
print("the video has been completed. thanks for watching!")
