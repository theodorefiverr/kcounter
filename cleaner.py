
import os
# import Ki67_counter
import datetime
def is_image_older_than(image_filename, minutes_old):
    current_time = datetime.datetime.now()
    image_last_modified_time = datetime.datetime.fromtimestamp(os.path.getmtime(image_filename))
    is_image_old = ((current_time - image_last_modified_time).total_seconds() / 60) >= minutes_old
    return is_image_old


def delete_old_images(directory, minutes_old):
    today = datetime.datetime.today()
    for filename in os.listdir(directory):
        path = os.path.join(directory, filename);
        if os.path.isfile(path):
            is_image_old = is_image_older_than(path, minutes_old=10)
            if(is_image_old):
                os.remove(path)
# # Example usage
# delete_old_images("images",30)