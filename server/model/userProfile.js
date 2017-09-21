const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true
    },
    profile: {
      name: {
        type: String,
        default: 'name'
      },
      description: {
        type: String,
        default: 'Describe About Yourself'
      },
      dob: {
        type: String,
        default: 'dob'
      },
      gender: {
        type: String,
        default: 'gender'
      },
      address: {
        Line1: {
          type: String,
          default: 'H.No.'
        },
        Line2: {
          type: String,
          default: 'Street'
        },
        country: {
          type: String,
          default: 'Country'
        },
        region: {
          type: String,
          default: 'State'
        },
        city: {
          type: String,
          default: 'City'
        },
        postalCode: {
          type: String,
          default: 'postal Code'
        }
        },
      education: {
        primary: {
          type: String,
          default: 'Primary'
        },
        highSchool: {
          type: String,
          default: 'Secondary'
        },
        university: {
          type: String,
          default: 'University'
        }
      },
      phone: {
        type: String,
        default: 'Phone'
      }
    }
});
const userProfile = mongoose.model('userProfile', schema);
module.exports = userProfile;
