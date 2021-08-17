const bcrypt = require('bcrypt');
bcrypt.compare("12riothomas", "$2b$10$zsH0PbIL6TP1k9pMwDSgQupCHwfiJjCszxnuqU1uf87MpaEyfH0ki", function(err, result) {
    if (result) {
        console.log("heool");
    } else {
        console.log("hoa");
    }
})