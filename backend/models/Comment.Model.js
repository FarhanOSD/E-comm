import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'post',
    required: true,
  },
  username: {
    type: Array,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'comment Placed',
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  payment: {
    type: Boolean,
    required: true,
    default: false,
  },

  date: {
    type: Number,
    required: true,
  },
});

const commentModel =
  mongoose.models.comment || mongoose.model('comment', commentSchema);

export default commentModel;