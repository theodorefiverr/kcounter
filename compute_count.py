import datetime
import Ki67_counter_v4
from cleaner import delete_old_images



def computeCount(image_file_path): 
        delete_old_images("images",5)
        timestamp = datetime.datetime.now()
        timestamp_str = timestamp.strftime("%Y%m%d_%H%M%S.%f")[:-3]
        output1In = "images/" + timestamp_str + "-output1.jpg"
        output2In = "images/" + timestamp_str + "-output2.jpg"
        autoContract = "images/" + timestamp_str + "-autoContract.png"
        myobj = Ki67_counter_v4.initialize_runtime(['-nojvm', '-nodisplay'])
        myobj = Ki67_counter_v4.initialize()
        try:
                result = myobj.Ki67_counter_v4(image_file_path, output1In, output2In, autoContract)
                myobj.terminate()
                return result, output1In, output2In, autoContract
        except Exception as e:
                print(e)
                myobj.terminate()
                raise
        



