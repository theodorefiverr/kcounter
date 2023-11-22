#!/usr/bin/env python
"""
Sample script that uses the Ki67_counter_v2 module created using
MATLAB Compiler SDK.

Refer to the MATLAB Compiler SDK documentation for more information.
"""
import datetime
import Ki67_counter_v2
import matlab
import os
my_Ki67_counter_v2 = Ki67_counter_v2.initialize()
fillIn = "./68.jpg"
timestamp = datetime.datetime.now()
timestamp_str = timestamp.strftime("%Y%m%d_%H%M%S.%f")[:-3]
output1In = "images/" + timestamp_str + "-output1.jpg"
output2In = "images/" + timestamp_str + "-output2.jpg"
pp=my_Ki67_counter_v2.Ki67_counter_v2(fillIn, output1In, output2In)
print(pp)
my_Ki67_counter_v2.terminate()

# def is_image_older_than(image_filename, minutes_old):
#     current_time = datetime.datetime.now()
#     image_last_modified_time = datetime.datetime.fromtimestamp(os.path.getmtime(image_filename))
#     is_image_old = ((current_time - image_last_modified_time).total_seconds() / 60) >= minutes_old
#     return is_image_old

# def delete_old_images(directory, minutes_old):
#     today = datetime.datetime.today()
#     for filename in os.listdir(directory):
#         path = os.path.join(directory, filename);
#         if os.path.isfile(path):
#             is_image_old = is_image_older_than(path, minutes_old=10)
#             if(is_image_old):
#                 os.remove(path)
# # Example usage
# delete_old_images("images",30)