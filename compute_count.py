import datetime
import Ki67_counter_v3
from cleaner import delete_old_images

myobj = Ki67_counter_v3.initialize_runtime(['-nojvm', '-nodisplay'])
myobj = Ki67_counter_v3.initialize()

def computeCount(image_file_path):
        delete_old_images("images",5)
        timestamp = datetime.datetime.now()
        timestamp_str = timestamp.strftime("%Y%m%d_%H%M%S.%f")[:-3]
        output1In = "images/" + timestamp_str + "-output1.jpg"
        output2In = "images/" + timestamp_str + "-output2.jpg"
        autoContract = "images/" + timestamp_str + "-autoContract.png"
        result = myobj.Ki67_counter_v3(image_file_path, output1In, output2In,autoContract)
        return result, output1In, output2In, autoContract

        # Close and remove the temporary file



