import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ReviewForm({addTodo}) {



    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values,action) => {
                    console.log('onSubmit');
                    console.log(values);
                    addTodo(values);
                    action.resetForm();
                }}
            >

                {
                    (formikProps) => (
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Todo title'
                                onChangeText={formikProps.handleChange('title')}
                                value={formikProps.values.title}
                            />

                            <TextInput
                                style={globalStyles.input}
                                placeholder='Todo body'
                                onChangeText={formikProps.handleChange('body')}
                                value={formikProps.values.body}
                            />
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Todo Rating(1-5)'
                                onChangeText={formikProps.handleChange('rating')}
                                value={formikProps.values.rating}
                                keyboardType='numeric'
                            />

                            <Button
                                title='submit'
                                color='maroon'
                                onPress={formikProps.handleSubmit}
                             />
                        </View>
                    )
                }
            </Formik>

        </View>

    )


}