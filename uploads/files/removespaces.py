# =======================================================================
# Author:       Henry Tang
# Date:         March 12, 2021
# Purpose:      To loop through all csv files in a directory and remove
#               any spaces in the postal code field of a csv file. The
#               updated csv will be written as a new csv file in the
#               same directory.
# Dependencies: The script user must have read/write access to the
#               directory. All csv files in the directory should
#               contain a postal code field.
# Parameters:   File Directory path (string)
#               Postal code field row index (int)
# =======================================================================
import os
import csv

# select the directory to parse
directory = 'C:\\Users\\User\\Documents\\New_Folder'

# set the row index of the postal code field
fieldindex = 9

# loop through directory looking for csv files
for filename in os.listdir(directory):
    if filename.endswith(".csv"):

        # get file path of csv
        input = os.path.join(directory, filename)

        # set output file path
        output = directory + '\\' + filename[:-4] + '_NEW.csv'

        # set up csv reader and writer
        with open(input, 'r') as infile, open(output, 'w', newline='') as outfile:
            csvfile = csv.reader(infile, delimiter=',')
            writer = csv.writer(outfile, delimiter=',')

            # write the header to the output file
            header = next(infile)
            outfile.write(header)

            # loop through csv rows
            for row in csvfile:

                # add row values to a list
                rowvalues = []
                for value in row:
                    rowvalues.append(value)

                # remove space if postal code contains space
                postalcode = row[fieldindex]
                if len(postalcode) == 7:
                    postalcode = postalcode[0:3] + postalcode[4:7]

                # update the row with edited postal code
                rowvalues.pop(fieldindex)
                rowvalues.insert(fieldindex, postalcode)

                # write the row to output file
                writer.writerow(rowvalues)
