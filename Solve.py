def sum_of_max_min(nums):
    max_n = nums[0]
    min_n = nums[0]

    for i in range(len(nums)):
        if nums[i] > max_n:
            max_n = nums[i]
        elif nums[i] < min_n:
            min_n = nums[i]

    return max_n + min_n


sum = sum_of_max_min([3,55,4,2,8,66,99,45])

print(sum)
