import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const SearchItemType = new ObjectType({
  name: 'SearchItem',
  fields: {
    title: { type: new NonNull(StringType) },
    description: { type: StringType },
    type: { type: new NonNull(StringType) },
    link: { type: new NonNull(StringType) },
    owner: { type: new NonNull(StringType) },
    dateInserted: { type: new NonNull(StringType) },
    dateUpdated: { type: new NonNull(StringType) },
  },
});

export default SearchItemType;
