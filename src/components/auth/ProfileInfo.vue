<template>
    <div class="container">
        <h2 class="mb-5">Personal information</h2>
        <form>
            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="First name" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Last name" required/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Phone number" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Adress" required/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="citizenship" required/>
                </div>
                <select class="custom-select col-sm-1 col-md">
                    <option selected>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="E-mail" required/>
                </div>
            </div>
            <h2 class="mt-5 mb-5">Business information</h2>
            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="test" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="test" required/>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>